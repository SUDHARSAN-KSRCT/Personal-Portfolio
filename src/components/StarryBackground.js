import React, { useEffect, useRef } from "react";

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    let shootingStar = null;
    const numStars = 80;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 1.2 + 0.3;
        this.alpha = Math.random() * 0.5 + 0.5;
        this.fadeSpeed = Math.random() * 0.02;
        this.speedX = (Math.random() - 0.5) * 0.1;
        this.speedY = (Math.random() - 0.5) * 0.1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        this.alpha += this.fadeSpeed;
        if (this.alpha > 1 || this.alpha < 0.3) this.fadeSpeed *= -1;

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        this.draw();
      }
    }

    class ShootingStar {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.3; // Starts from upper area
        this.length = Math.random() * 60 + 30;
        this.speed = Math.random() * 5 + 2;
        this.angle = Math.PI / 4; // 45-degree diagonal movement
        this.alpha = 1;
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x - this.length * Math.cos(this.angle),
          this.y - this.length * Math.sin(this.angle)
        );
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
      }

      update() {
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
        this.alpha -= 0.02;

        if (this.alpha <= 0) {
          this.reset();
        }

        this.draw();
      }
    }

    const initializeStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
      shootingStar = new ShootingStar();
    };
    initializeStars();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => star.update());
      shootingStar.update();
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", () => {
      setCanvasSize();
      initializeStars();
    });

    return () => window.removeEventListener("resize", setCanvasSize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default StarryBackground;
