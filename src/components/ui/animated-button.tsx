import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const animatedButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500 shadow-sm hover:shadow-md dark:hover:shadow-gray-900/20 transform hover:scale-105",
        outline:
          "border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 bg-transparent",
        ghost:
          "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50",
        subtle:
          "bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600",
        minimal:
          "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm hover:shadow-lg dark:hover:shadow-gray-900/30",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 py-1 text-sm",
        lg: "h-12 px-6 py-3 text-lg",
        xl: "h-16 px-8 py-4 text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof animatedButtonVariants> {
  children: React.ReactNode;
  showShine?: boolean;
  showGlow?: boolean;
  showRipple?: boolean;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    children, 
    showShine = true, 
    showGlow = true, 
    showRipple = true,
    ...props 
  }, ref) => {
    const [ripples, setRipples] = React.useState<Array<{ id: number; x: number; y: number }>>([]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!showRipple) return;
      
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      const newRipple = {
        id: Date.now(),
        x,
        y,
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      // 移除涟漪效果
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
    };

    return (
      <button
        className={cn(animatedButtonVariants({ variant, size, className }))}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {/* 涟漪效果 */}
        {showRipple && ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute w-2 h-2 bg-gray-400/30 dark:bg-gray-500/30 rounded-full animate-ping"
            style={{
              left: ripple.x - 4,
              top: ripple.y - 4,
            }}
          />
        ))}
        
        {/* 光泽扫过效果 - 亮色主题 */}
        {showShine && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out dark:hidden" />
        )}
        
        {/* 光泽扫过效果 - 暗色主题 */}
        {showShine && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out hidden dark:block" />
        )}
        
        {/* 发光边框效果 - 亮色主题 */}
        {showGlow && (
          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-gray-300 to-gray-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm dark:hidden" />
        )}
        
        {/* 发光边框效果 - 暗色主题 */}
        {showGlow && (
          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-gray-500 to-gray-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm hidden dark:block" />
        )}
        
        {/* 内容 */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton, animatedButtonVariants }; 