"use client";

import React, {
    useEffect,
    useRef,
    useState,
    useCallback,
    forwardRef,
    useImperativeHandle,
    useMemo,
    type ReactNode,
    type MouseEvent as ReactMouseEvent,
    type FormEvent,
    type SVGProps,
} from 'react';
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
    useTransform,
    type Transition,
    type VariantLabels,
    type Target,
    type TargetAndTransition,
    type Variants,
} from 'framer-motion';

function cn(...classes: (string | undefined | null | boolean)[]): string {
    return classes.filter(Boolean).join(" ");
}

import { RotatingText } from './RotatingText';
import { ShinyText } from './ShinyText';

const ChevronDownIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 ml-1 inline-block transition-transform duration-200 group-hover:rotate-180" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

const MenuIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const CloseIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

const ExternalLinkIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);

const NiftyLogo: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 20V4l12 12V4" />
        <path d="M17 7l4-4 4 4" stroke="#0CF2A0" />
        <path d="M21 3v8" stroke="#0CF2A0" />
    </svg>
);

const RelianceLogo: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
        <path d="M12 2C8 6 6 9 6 13a6 6 0 0 0 12 0c0-4-2-7-6-11Z" fill="#ff5a00" />
        <path d="M12 6c-2 2.5-3 4-3 6.5a3 3 0 0 0 6 0c0-2.5-1-4-3-6.5Z" fill="#ffcc00" />
    </svg>
);

const HdfcLogo: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="3.5" fill="#004C8F" />
        <rect x="6" y="6" width="12" height="12" fill="#ffffff" />
        <rect x="9" y="9" width="6" height="6" fill="#004C8F" />
        <rect x="11" y="2" width="2" height="4" fill="#004C8F" />
        <rect x="11" y="18" width="2" height="4" fill="#004C8F" />
        <rect x="2" y="11" width="4" height="2" fill="#004C8F" />
        <rect x="18" y="11" width="4" height="2" fill="#004C8F" />
    </svg>
);

const TcsLogo: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...props}>
        <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#0052cc" strokeWidth={2.5} />
        <path d="M6 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#0080ff" strokeWidth={2} />
        <path d="M8 16c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#00c8ff" strokeWidth={1.5} />
    </svg>
);

interface NavLinkProps {
    href?: string;
    children: ReactNode;
    hasDropdown?: boolean;
    className?: string;
    onClick?: (event: ReactMouseEvent<HTMLAnchorElement>) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href = "#", children, hasDropdown = false, className = "", onClick }) => (
    <motion.a
        href={href}
        onClick={onClick}
        className={cn("relative group text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 flex items-center py-1", className)}
        whileHover="hover"
    >
        {children}
        {hasDropdown && <ChevronDownIcon />}
        {!hasDropdown && (
            <motion.div
                className="absolute bottom-[-2px] left-0 right-0 h-[1px] bg-[#0CF2A0]"
                variants={{ initial: { scaleX: 0, originX: 0.5 }, hover: { scaleX: 1, originX: 0.5 } }}
                initial="initial"
                transition={{ duration: 0.3, ease: "easeOut" }}
            />
        )}
    </motion.a>
);

interface DropdownMenuProps {
    children: ReactNode;
    isOpen: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, isOpen }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 origin-top z-40"
            >
                <div className="bg-[#111111] border border-gray-700/50 rounded-md shadow-xl p-2">
                    {children}
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

interface DropdownItemProps {
    href?: string;
    children: ReactNode;
    icon?: React.ReactElement<SVGProps<SVGSVGElement>>;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ href = "#", children, icon }) => (
    <a
        href={href}
        className="group flex items-center justify-between w-full px-3 py-2 text-sm text-gray-300 hover:bg-gray-700/30 hover:text-white rounded-md transition-colors duration-150"
    >
        <span>{children}</span>
        {icon && React.cloneElement(icon, { className: "w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" })}
    </a>
);

interface Dot {
    x: number;
    y: number;
    baseColor: string;
    targetOpacity: number;
    currentOpacity: number;
    opacitySpeed: number;
    baseRadius: number;
    currentRadius: number;
}

interface InteractiveHeroProps {
    hideHeader?: boolean;
}

const InteractiveHero: React.FC<InteractiveHeroProps> = ({ hideHeader = false }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 10);
    });

    const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const textScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

    const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const imageRotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
    const imageScale = useTransform(scrollYProgress, [0, 0.6], [0.95, 1.03]);

    const widgetY1 = useTransform(scrollYProgress, [0, 1], [0, -160]);
    const widgetY2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const widgetY3 = useTransform(scrollYProgress, [0, 1], [0, -110]);
    const widgetY4 = useTransform(scrollYProgress, [0, 1], [0, -220]);

    const dotsRef = useRef<Dot[]>([]);
    const gridRef = useRef<Record<string, number[]>>({});
    const canvasSizeRef = useRef<{ width: number; height: number }>({ width: 0, height: 0 });
    const mousePositionRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

    const DOT_SPACING = 25;
    const BASE_OPACITY_MIN = 0.40;
    const BASE_OPACITY_MAX = 0.50;
    const BASE_RADIUS = 1;
    const INTERACTION_RADIUS = 150;
    const INTERACTION_RADIUS_SQ = INTERACTION_RADIUS * INTERACTION_RADIUS;
    const OPACITY_BOOST = 0.6;
    const RADIUS_BOOST = 2.5;
    const GRID_CELL_SIZE = Math.max(50, Math.floor(INTERACTION_RADIUS / 1.5));

    const handleMouseMove = useCallback((event: globalThis.MouseEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) {
            mousePositionRef.current = { x: null, y: null };
            return;
        }
        const rect = canvas.getBoundingClientRect();
        const canvasX = event.clientX - rect.left;
        const canvasY = event.clientY - rect.top;
        mousePositionRef.current = { x: canvasX, y: canvasY };
    }, []);

    const createDots = useCallback(() => {
        const { width, height } = canvasSizeRef.current;
        if (width === 0 || height === 0) return;

        const newDots: Dot[] = [];
        const newGrid: Record<string, number[]> = {};
        const cols = Math.ceil(width / DOT_SPACING);
        const rows = Math.ceil(height / DOT_SPACING);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const x = i * DOT_SPACING + DOT_SPACING / 2;
                const y = j * DOT_SPACING + DOT_SPACING / 2;
                const cellX = Math.floor(x / GRID_CELL_SIZE);
                const cellY = Math.floor(y / GRID_CELL_SIZE);
                const cellKey = `${cellX}_${cellY}`;

                if (!newGrid[cellKey]) {
                    newGrid[cellKey] = [];
                }

                const dotIndex = newDots.length;
                newGrid[cellKey].push(dotIndex);

                const baseOpacity = Math.random() * (BASE_OPACITY_MAX - BASE_OPACITY_MIN) + BASE_OPACITY_MIN;
                newDots.push({
                    x,
                    y,
                    baseColor: `rgba(87, 220, 205, ${BASE_OPACITY_MAX})`,
                    targetOpacity: baseOpacity,
                    currentOpacity: baseOpacity,
                    opacitySpeed: (Math.random() * 0.005) + 0.002,
                    baseRadius: BASE_RADIUS,
                    currentRadius: BASE_RADIUS,
                });
            }
        }
        dotsRef.current = newDots;
        gridRef.current = newGrid;
    }, [DOT_SPACING, GRID_CELL_SIZE, BASE_OPACITY_MIN, BASE_OPACITY_MAX, BASE_RADIUS]);

    const handleResize = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const container = canvas.parentElement;
        const width = container ? container.clientWidth : window.innerWidth;
        const height = container ? container.clientHeight : window.innerHeight;

        if (canvas.width !== width || canvas.height !== height ||
            canvasSizeRef.current.width !== width || canvasSizeRef.current.height !== height) {
            canvas.width = width;
            canvas.height = height;
            canvasSizeRef.current = { width, height };
            createDots();
        }
    }, [createDots]);

    const animateDots = useCallback(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const dots = dotsRef.current;
        const grid = gridRef.current;
        const { width, height } = canvasSizeRef.current;
        const { x: mouseX, y: mouseY } = mousePositionRef.current;

        if (!ctx || !dots || !grid || width === 0 || height === 0) {
            animationFrameId.current = requestAnimationFrame(animateDots);
            return;
        }

        ctx.clearRect(0, 0, width, height);

        const activeDotIndices = new Set<number>();
        if (mouseX !== null && mouseY !== null) {
            const mouseCellX = Math.floor(mouseX / GRID_CELL_SIZE);
            const mouseCellY = Math.floor(mouseY / GRID_CELL_SIZE);
            const searchRadius = Math.ceil(INTERACTION_RADIUS / GRID_CELL_SIZE);
            for (let i = -searchRadius; i <= searchRadius; i++) {
                for (let j = -searchRadius; j <= searchRadius; j++) {
                    const checkCellX = mouseCellX + i;
                    const checkCellY = mouseCellY + j;
                    const cellKey = `${checkCellX}_${checkCellY}`;
                    if (grid[cellKey]) {
                        grid[cellKey].forEach(dotIndex => activeDotIndices.add(dotIndex));
                    }
                }
            }
        }

        dots.forEach((dot, index) => {
            dot.currentOpacity += dot.opacitySpeed;
            if (dot.currentOpacity >= dot.targetOpacity || dot.currentOpacity <= BASE_OPACITY_MIN) {
                dot.opacitySpeed = -dot.opacitySpeed;
                dot.currentOpacity = Math.max(BASE_OPACITY_MIN, Math.min(dot.currentOpacity, BASE_OPACITY_MAX));
                dot.targetOpacity = Math.random() * (BASE_OPACITY_MAX - BASE_OPACITY_MIN) + BASE_OPACITY_MIN;
            }

            let interactionFactor = 0;
            dot.currentRadius = dot.baseRadius;

            if (mouseX !== null && mouseY !== null && activeDotIndices.has(index)) {
                const dx = dot.x - mouseX;
                const dy = dot.y - mouseY;
                const distSq = dx * dx + dy * dy;

                if (distSq < INTERACTION_RADIUS_SQ) {
                    const distance = Math.sqrt(distSq);
                    interactionFactor = Math.max(0, 1 - distance / INTERACTION_RADIUS);
                    interactionFactor = interactionFactor * interactionFactor;
                }
            }

            const finalOpacity = Math.min(1, dot.currentOpacity + interactionFactor * OPACITY_BOOST);
            dot.currentRadius = dot.baseRadius + interactionFactor * RADIUS_BOOST;

            const colorMatch = dot.baseColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
            const r = colorMatch ? colorMatch[1] : '87';
            const g = colorMatch ? colorMatch[2] : '220';
            const b = colorMatch ? colorMatch[3] : '205';

            ctx.beginPath();
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${finalOpacity.toFixed(3)})`;
            ctx.arc(dot.x, dot.y, dot.currentRadius, 0, Math.PI * 2);
            ctx.fill();
        });

        animationFrameId.current = requestAnimationFrame(animateDots);
    }, [GRID_CELL_SIZE, INTERACTION_RADIUS, INTERACTION_RADIUS_SQ, OPACITY_BOOST, RADIUS_BOOST, BASE_OPACITY_MIN, BASE_OPACITY_MAX, BASE_RADIUS]);

    useEffect(() => {
        handleResize();
        const canvasElement = canvasRef.current;
        const handleMouseLeave = () => {
            mousePositionRef.current = { x: null, y: null };
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('resize', handleResize);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);


        animationFrameId.current = requestAnimationFrame(animateDots);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [handleResize, handleMouseMove, animateDots]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    const headerVariants: Variants = {
        top: {
            backgroundColor: "rgba(17, 17, 17, 0.8)",
            borderBottomColor: "rgba(55, 65, 81, 0.5)",
            position: 'fixed',
            boxShadow: 'none',
        },
        scrolled: {
            backgroundColor: "rgba(17, 17, 17, 0.95)",
            borderBottomColor: "rgba(75, 85, 99, 0.7)",
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            position: 'fixed'
        }
    };

    const mobileMenuVariants: Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.15, ease: "easeIn" } }
    };

    const contentDelay = 0.3;
    const itemDelayIncrement = 0.1;

    const bannerVariants: Variants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: contentDelay } }
    };
    const headlineVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, delay: contentDelay + itemDelayIncrement } }
    };
    const subHeadlineVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: contentDelay + itemDelayIncrement * 2 } }
    };
    const formVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: contentDelay + itemDelayIncrement * 3 } }
    };
    const trialTextVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, delay: contentDelay + itemDelayIncrement * 4 } }
    };
    const worksWithVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, delay: contentDelay + itemDelayIncrement * 5 } }
    };
    const imageVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, delay: contentDelay + itemDelayIncrement * 6, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div className={cn("relative bg-[#111111] text-gray-300 min-h-screen flex flex-col overflow-x-hidden pt-28 md:pt-36")}>
            <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-80" />
            <div className="absolute inset-0 z-1 pointer-events-none" style={{
                background: 'linear-gradient(to bottom, transparent 0%, #111111 90%), radial-gradient(ellipse at center, transparent 40%, #111111 95%)'
            }}></div>

            {!hideHeader && (
                <motion.header
                    variants={headerVariants}
                    initial="top"
                    animate={isScrolled ? "scrolled" : "top"}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-6 w-full md:px-10 lg:px-16 sticky top-0 z-30 backdrop-blur-md border-b"
                >
                    <nav className="flex justify-between items-center max-w-screen-xl mx-auto h-[70px]">
                        <div className="flex items-center flex-shrink-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#0CF2A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 17L12 22L22 17" stroke="#0CF2A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12L12 17L22 12" stroke="#0CF2A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-xl font-bold text-white ml-2">Strat</span>
                        </div>

                        <div className="hidden md:flex items-center justify-center flex-grow space-x-6 lg:space-x-8 px-4">
                            <NavLink href="#">Terminal</NavLink>
                            <NavLink href="#">Intelligence</NavLink>

                            <div
                                className="relative"
                                onMouseEnter={() => setOpenDropdown('agents')}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <NavLink href="#" hasDropdown>Agents</NavLink>
                                <DropdownMenu isOpen={openDropdown === 'agents'}>
                                    <DropdownItem href="#">Technical Agent</DropdownItem>
                                    <DropdownItem href="#">Sentiment Agent</DropdownItem>
                                    <DropdownItem href="#">Predictive Agent</DropdownItem>
                                    <DropdownItem href="#">Quant-RAG Agent</DropdownItem>
                                    <DropdownItem href="#">Aggregator</DropdownItem>
                                </DropdownMenu>
                            </div>

                            <div
                                className="relative"
                                onMouseEnter={() => setOpenDropdown('techstack')}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <NavLink href="#" hasDropdown>Tech Stack</NavLink>
                                <DropdownMenu isOpen={openDropdown === 'techstack'}>
                                    <DropdownItem href="#" icon={<ExternalLinkIcon />}>QuestDB</DropdownItem>
                                    <DropdownItem href="#">Redpanda</DropdownItem>
                                    <DropdownItem href="#">Tauri</DropdownItem>
                                    <DropdownItem href="#">Rust Ingestion</DropdownItem>
                                </DropdownMenu>
                            </div>

                            <NavLink href="#">Docs</NavLink>
                            <NavLink href="#">Pricing</NavLink>
                        </div>

                        <div className="flex items-center flex-shrink-0 space-x-4 lg:space-x-6">
                            <NavLink href="#" className="hidden md:inline-block">Sign in</NavLink>

                            <motion.a
                                href="#"
                                className="bg-[#0CF2A0] text-[#111111] px-4 py-[6px] rounded-md text-sm font-semibold hover:bg-opacity-90 transition-colors duration-200 whitespace-nowrap shadow-sm hover:shadow-md"
                                whileHover={{ scale: 1.03, y: -1 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            >
                                Get Terminal
                            </motion.a>

                            <motion.button
                                className="md:hidden text-gray-300 hover:text-white z-50"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle menu"
                                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                            >
                                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                            </motion.button>
                        </div>
                    </nav>

                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                key="mobile-menu"
                                variants={mobileMenuVariants} initial="hidden" animate="visible" exit="exit"
                                className="md:hidden absolute top-full left-0 right-0 bg-[#111111]/95 backdrop-blur-sm shadow-lg py-4 border-t border-gray-800/50"
                            >
                                <div className="flex flex-col items-center space-y-4 px-6">
                                    <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Terminal</NavLink>
                                    <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Intelligence</NavLink>
                                    <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Agents</NavLink>
                                    <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Tech Stack</NavLink>
                                    <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Docs</NavLink>
                                    <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Pricing</NavLink>
                                    <hr className="w-full border-t border-gray-700/50 my-2" />
                                    <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Sign in</NavLink>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.header>
            )}

            <main
                ref={heroRef}
                style={{ perspective: 1200 }}
                className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-8 pb-16 relative z-10 w-full"
            >
                {/* Floating Parallax Widgets */}
                {/* Widget 1: Left Top (NIFTY 50 Index) */}
                <motion.div
                    style={{ y: widgetY1 }}
                    className="absolute left-[4%] top-[10%] hidden xl:block z-20 pointer-events-auto"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="bg-gradient-to-br from-[#181818]/90 to-[#111111]/95 backdrop-blur-md border border-white/10 hover:border-[#0CF2A0]/40 rounded-xl p-3 pr-4 flex items-center gap-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5),_0_0_20px_rgba(12,242,160,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6),_0_0_25px_rgba(12,242,160,0.15)] transition-all duration-300 group cursor-pointer"
                    >
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform duration-300 w-10 h-10 flex items-center justify-center">
                            <NiftyLogo className="w-6 h-6 text-[#0CF2A0]" />
                        </div>
                        <div className="text-left font-sans">
                            <div className="text-[9px] text-gray-500 font-bold tracking-wider uppercase">NSE Index</div>
                            <div className="text-xs font-semibold text-white">NIFTY 50</div>
                            <div className="text-xs font-mono font-semibold text-[#0CF2A0] mt-0.5">22,419.50</div>
                        </div>
                        <div className="flex flex-col items-end gap-1.5 ml-1">
                            <span className="text-[9px] bg-[#0CF2A0]/15 text-[#0CF2A0] px-1.5 py-0.5 rounded font-mono font-bold">+1.24%</span>
                            <svg width="46" height="14" viewBox="0 0 46 14" fill="none" className="opacity-80 group-hover:opacity-100 transition-opacity">
                                <path d="M2 12 L8 10 L14 11 L20 6 L26 8 L32 2 L38 4 L44 1" stroke="#0CF2A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Widget 2: Left Bottom (RELIANCE Stock) */}
                <motion.div
                    style={{ y: widgetY2 }}
                    className="absolute left-[6%] top-[52%] hidden lg:block z-20 pointer-events-auto"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
                        className="bg-gradient-to-br from-[#181818]/90 to-[#111111]/95 backdrop-blur-md border border-white/10 hover:border-[#0CF2A0]/40 rounded-xl p-3 pr-4 flex items-center gap-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5),_0_0_20px_rgba(12,242,160,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6),_0_0_25px_rgba(12,242,160,0.15)] transition-all duration-300 group cursor-pointer"
                    >
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 w-10 h-10 flex items-center justify-center">
                            <RelianceLogo className="w-6 h-6" />
                        </div>
                        <div className="text-left font-sans">
                            <div className="text-[9px] text-gray-500 font-bold tracking-wider uppercase">Energy & Retail</div>
                            <div className="text-xs font-semibold text-white">RELIANCE</div>
                            <div className="text-xs font-mono font-semibold text-[#0CF2A0] mt-0.5">2,914.80</div>
                        </div>
                        <div className="flex flex-col items-end gap-1.5 ml-1">
                            <span className="text-[9px] bg-[#0CF2A0]/15 text-[#0CF2A0] px-1.5 py-0.5 rounded font-mono font-bold">+2.15%</span>
                            <svg width="46" height="14" viewBox="0 0 46 14" fill="none" className="opacity-80 group-hover:opacity-100 transition-opacity">
                                <path d="M2 11 L8 12 L14 9 L20 10 L26 5 L32 7 L38 2 L44 3" stroke="#0CF2A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Widget 3: Right Top (HDFC BANK Stock) */}
                <motion.div
                    style={{ y: widgetY3 }}
                    className="absolute right-[4%] top-[15%] hidden xl:block z-20 pointer-events-auto"
                >
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ repeat: Infinity, duration: 4.4, ease: "easeInOut" }}
                        className="bg-gradient-to-br from-[#181818]/90 to-[#111111]/95 backdrop-blur-md border border-white/10 hover:border-red-500/40 rounded-xl p-3 pr-4 flex items-center gap-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5),_0_0_20px_rgba(239,68,68,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6),_0_0_25px_rgba(239,68,68,0.15)] transition-all duration-300 group cursor-pointer"
                    >
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 w-10 h-10 flex items-center justify-center">
                            <HdfcLogo className="w-6 h-6" />
                        </div>
                        <div className="text-left font-sans">
                            <div className="text-[9px] text-gray-500 font-bold tracking-wider uppercase">Private Banking</div>
                            <div className="text-xs font-semibold text-white">HDFC BANK</div>
                            <div className="text-xs font-mono font-semibold text-red-400 mt-0.5">1,521.10</div>
                        </div>
                        <div className="flex flex-col items-end gap-1.5 ml-1">
                            <span className="text-[9px] bg-red-500/15 text-red-400 px-1.5 py-0.5 rounded font-mono font-bold">-0.45%</span>
                            <svg width="46" height="14" viewBox="0 0 46 14" fill="none" className="opacity-80 group-hover:opacity-100 transition-opacity">
                                <path d="M2 2 L8 5 L14 4 L20 8 L26 7 L32 12 L38 10 L44 13" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Widget 4: Right Bottom (TCS Stock) */}
                <motion.div
                    style={{ y: widgetY4 }}
                    className="absolute right-[6%] top-[58%] hidden lg:block z-20 pointer-events-auto"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
                        className="bg-gradient-to-br from-[#181818]/90 to-[#111111]/95 backdrop-blur-md border border-white/10 hover:border-[#0CF2A0]/40 rounded-xl p-3 pr-4 flex items-center gap-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5),_0_0_20px_rgba(12,242,160,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6),_0_0_25px_rgba(12,242,160,0.15)] transition-all duration-300 group cursor-pointer"
                    >
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 w-10 h-10 flex items-center justify-center">
                            <TcsLogo className="w-6 h-6 text-[#00c8ff]" />
                        </div>
                        <div className="text-left font-sans">
                            <div className="text-[9px] text-gray-500 font-bold tracking-wider uppercase">IT Services</div>
                            <div className="text-xs font-semibold text-white">TCS</div>
                            <div className="text-xs font-mono font-semibold text-[#0CF2A0] mt-0.5">3,852.40</div>
                        </div>
                        <div className="flex flex-col items-end gap-1.5 ml-1">
                            <span className="text-[9px] bg-[#0CF2A0]/15 text-[#0CF2A0] px-1.5 py-0.5 rounded font-mono font-bold">+0.95%</span>
                            <svg width="46" height="14" viewBox="0 0 46 14" fill="none" className="opacity-80 group-hover:opacity-100 transition-opacity">
                                <path d="M2 10 L8 8 L14 9 L20 6 L26 8 L32 4 L38 5 L44 1" stroke="#0CF2A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    style={{ y: textY, opacity: textOpacity, scale: textScale }}
                    className="flex flex-col items-center justify-center text-center w-full"
                >
                    <motion.h1
                        variants={headlineVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white leading-[1.05] font-heading tracking-[-0.02em] max-w-4xl mb-4"
                    >
                        Trade with institutional-grade<br />{' '}
                        <span className="inline-block h-[1.2em] sm:h-[1.2em] lg:h-[1.2em] overflow-hidden align-bottom">
                            <RotatingText
                                texts={['Signals', 'Consensus', 'Conviction', 'Analysis', 'Insights']}
                                mainClassName="text-[#0CF2A0] mx-1"
                                staggerFrom={"last"}
                                initial={{ y: "-100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: "110%", opacity: 0 }}
                                staggerDuration={0.01}
                                transition={{ type: "spring", damping: 18, stiffness: 250 }}
                                rotationInterval={2200}
                                splitBy="characters"
                                auto={true}
                                loop={true}
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={subHeadlineVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
                    >
                        Ingest live binary ticks from Zerodha Kite, fuse signals from 5 specialized AI agents, and execute with institutional-grade conviction. Built in Rust for serious Indian F&O traders.
                    </motion.p>

                    <motion.form
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full max-w-md mx-auto mb-3"
                        onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
                    >
                        <input
                            type="email"
                            placeholder="Enter email for beta invite"
                            required
                            aria-label="Email Address"
                            className="flex-grow w-full sm:w-auto px-4 py-2 rounded-md bg-[#2a2a2a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0CF2A0] focus:border-transparent transition-all"
                        />
                        <motion.button
                            type="submit"
                            className="w-full sm:w-auto bg-[#0CF2A0] text-[#111111] px-5 py-2 rounded-md text-sm font-semibold hover:bg-opacity-90 transition-colors duration-200 whitespace-nowrap shadow-sm hover:shadow-md flex-shrink-0"
                            whileHover={{ scale: 1.03, y: -1 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                            Request Early Access
                        </motion.button>
                    </motion.form>

                    <motion.p
                        variants={trialTextVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-xs text-gray-500 mb-10"
                    >
                        Invite-only beta
                    </motion.p>

                    <motion.div
                        variants={worksWithVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center justify-center space-y-2 mb-10"
                    >
                        <span className="text-xs uppercase text-gray-500 tracking-wider font-medium">Works with</span>
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-gray-400">
                            <span className="flex items-center whitespace-nowrap">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0CF2A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
                                Zerodha Kite
                            </span>
                            <span className="flex items-center whitespace-nowrap">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0CF2A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                                NSE & BSE
                            </span>
                            <span className="flex items-center whitespace-nowrap">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0CF2A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5"><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>
                                5 AI Agents
                            </span>
                            <span className="flex items-center whitespace-nowrap">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0CF2A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" /></svg>
                                QuestDB Sink
                            </span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full max-w-4xl mx-auto px-4 sm:px-0"
                >
                    <motion.div
                        style={{
                            y: imageY,
                            rotateX: imageRotateX,
                            scale: imageScale,
                            transformStyle: "preserve-3d"
                        }}
                        className="w-full"
                    >
                        <img
                            src="/hero/hero.png"
                            alt="Strat desktop charting terminal mockup"
                            width={1024}
                            height={640}
                            className="w-full h-auto object-contain rounded-lg shadow-xl border border-gray-700/50"
                            loading="lazy"
                        />
                    </motion.div>
                </motion.div>
            </main>

        </div>
    );
};

export default InteractiveHero;
