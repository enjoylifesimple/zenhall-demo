animate();
            } catch (e) {
                alert("Audio lauch failed. Please check browser permissions.");
                console.error(e);
            }
        }

        function animate() {
            if (!isRunning) return;
            
            // 强制使用 requestAnimationFrame 驱动动画
            requestAnimationFrame(animate);

            const time = audioCtx.currentTime;
            // 视觉共振核心：C = sin(2 * pi * f * t)
            const resonance = Math.sin(2 * Math.PI * DELTA_F * time);
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const baseRadius = 150;
            const radius = baseRadius + 50 * resonance;
            
            // 颜色在深蓝与亮白之间切换
            const brightness = Math.floor(127 + 127 * resonance);
            ctx.strokeStyle = `rgb(100, 149, ${brightness})`;
            ctx.lineWidth = 2;
            
            // 绘制双环
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(centerX, centerY, radius * 0.7, 0, Math.PI * 2);
            ctx.stroke();
        }

        overlayDiv.addEventListener('click', () => {
            startResonance();
        });
    </script>
</body>
</html>
