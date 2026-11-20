import { motion } from "motion/react";

export default function Reveal({
  as = "div",
  children,
  className,
  direction = "up",
  delay = 0,
  writing = false,
  ...props
}) {
  const MotionTag = motion[as];

  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1,
    filter: "blur(0px)",
    clipPath: "inset(0 0% 0 0)",
  };

  return (
    <MotionTag
      className={className}
      initial={visible}
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scaleX: 1,
          scaleY: 1,
          filter: "blur(0px)",
          clipPath: "inset(0 0% 0 0)",
          transition: {
            duration: writing ? 1 : 0.8,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
