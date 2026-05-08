                oscL.connect(gainL).connect(panL).connect(audioCtx.destination);
                oscR.connect(gainR).connect(panR).connect(audioCtx.destination);

                oscL.start();
                oscR.start();

                isRunning = true;
                overlayDiv.classList.add('hidden');

        
