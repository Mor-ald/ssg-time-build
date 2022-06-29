const canvas1 = document.getElementById("canvas1");
const ctx = canvas1.getContext("2d");

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");

const NumberOfFilesOne = ["1", "5", "10", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"]; 
const NumberOfFilesTwo = ["1000", "2000", "3000", "4000", "5000", "6000", "7000", "8000", "9000", "10000"]; 
const SSG = ["Gatsby", "Hugo", "Jekyll", "Next.js", "Nuxt.js", "Hexo"];
const SSGColors = ["fuchsia", "#ff4088", "#ffcc00", "#000000", "#00dc82", "#0e83cd"]
const TimeForThousandPages = [
    [17.31, 17.07, 16.87, 17.35, 17.43, 17.85, 18.21, 18.49, 18.81, 19.26, 19.25, 19.81, 20.19, 20.53],
    [0.07, 0.08, 0.08, 0.10, 0.11, 0.14, 0.17, 0.21, 0.23, 0.26, 0.30, 0.31, 0.35, 0.36],
    [0.37, 0.38, 0.40, 0.45, 0.51, 0.63, 0.74, 0.86, 0.98, 1.07, 1.19, 1.34, 1.44, 1.56],
    [4.63, 4.43, 4.59, 4.70, 4.71, 4.89, 5.14, 5.46, 5.55, 5.74, 6.03, 6.17, 6.33, 6.67],
    [8.16, 8.24, 8.21, 8.50, 8.66, 8.96, 9.29, 9.59, 9.94, 10.34, 10.64, 10.87, 11.30, 11.59],
    [1.15, 1.20, 1.25, 1.42, 1.68, 2.07, 2.43, 2.81, 3.28, 3.62, 4.03, 4.44, 4.79, 7.09]
]

const TimeForTenThousandPages = [
    [20.53, 23.88, 26.96, 30.99, 33.99, 37.28, 39.93, 44.57, 52.21, 63.14],
    [0.36, 0.69, 0.98, 1.27, 1.59, 1.90, 2.19, 2.49, 4.23, 3.32],
    [1.56, 2.76, 3.97, 5.14, 6.36, 7.60, 8.79, 9.94, 11.12, 12.34],
    [6.67, 8.25, 9.58, 10.47, 11.05, 13.97, 15.55, 17.12, 18.48, 19.63],
    [11.59, 14.54, 17.56, 20.68, 23.93, 27.76, 29.66, 33.99, 36.54, 41.08],
    [7.09, 12.17, 16.57, 21.19, 25.87, 30.25, 32.69, 36.66, 39.83, 44.23]
]

const TimeBuildOn1000Pages = [20.53, 0.36, 1.56, 6.67, 11.59, 7.09];

//first plot

ctx.strokeStyle = "white";
ctx.lineWidth = 0.3; 
ctx.beginPath();

ctx.moveTo(50,0);
ctx.lineTo(50,300);
ctx.lineTo(650,300);
ctx.stroke(); 

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
 
for(let i = 0; i < 6; i++) { 
    ctx.fillText(5*i, 30, 300-50*i); 
    if (i < 5){
        ctx.lineWidth = 0.1; 
        ctx.beginPath(); 
        ctx.moveTo(50, i * 50 + 50); 
        ctx.lineTo(620, i * 50 + 50); 
        ctx.stroke();
    }
}

for(let i=0; i < 14; i++) { 
    ctx.fillText(NumberOfFilesOne[i], i*40+50, 320);
    if (i < 14){
        ctx.lineWidth = 0.1; 
        ctx.beginPath(); 
        ctx.moveTo(i * 40 + 90, 300); 
        ctx.lineTo(i * 40 + 90, 0); 
        ctx.stroke();
    } 
}

ctx.save();
ctx.translate(20, 50);
ctx.rotate(-Math.PI / 2);
ctx.fillText("Build time, seconds", -130, -5);
ctx.restore();
ctx.fillText("Number of files markdown (1 to 1000)", 260, 340);

for (let i = 0; i < 6; i++){
    ctx.beginPath();
    ctx.font = "12px Georgia";
    ctx.lineWidth = 2.0; 
    ctx.strokeStyle = SSGColors[i]
    ctx.moveTo(635, i*20+100); 
    ctx.lineTo(655, i*20+100);
    ctx.fillText(SSG[i], 660, i*20+105); 
    ctx.stroke();
}

for (let i = 0; i < TimeForThousandPages.length; i++){
    ssgTime = TimeForThousandPages[i];
    ctx.strokeStyle = SSGColors[i];
    ctx.fillStyle = SSGColors[i];
    for (let k = 0; k < ssgTime.length; k++){
        ctx.beginPath();
        ctx.lineWidth = 1.5;
        ctx.ellipse(k*40+50, 300 - 10*ssgTime[k], 2, 2, Math.PI / 4, 0, 2 * Math.PI);
        ctx.moveTo(k*40+50, 300 - 10*ssgTime[k]);
        ctx.lineTo((k+1)*40+50, 300 - 10*ssgTime[k+1]);
        ctx.fill();
        ctx.stroke();
    }
}

//second plot

ctx2.strokeStyle = "white";
ctx2.lineWidth = 0.3; 
ctx2.beginPath();

ctx2.moveTo(50,0);
ctx2.lineTo(50,350);
ctx2.lineTo(490,350);
ctx2.stroke(); 

ctx2.fillStyle = "white";
ctx2.strokeStyle = "white";

for(let i = 0; i < 7; i++) { 
    ctx2.fillText(10*i, 30, 350-50*i); 
    if (i < 6){
        ctx2.lineWidth = 0.1; 
        ctx2.beginPath(); 
        ctx2.moveTo(50, i * 50 + 50); 
        ctx2.lineTo(490, i * 50 + 50); 
        ctx2.stroke();
    }
}

for(let i=0; i < 10; i++) { 
    ctx2.fillText(NumberOfFilesTwo[i], i*40+50, 370);
    if (i < 14){
        ctx2.lineWidth = 0.1; 
        ctx2.beginPath(); 
        ctx2.moveTo(i * 40 + 90, 350); 
        ctx2.lineTo(i * 40 + 90, 0); 
        ctx2.stroke();
    } 
}

ctx2.save();
ctx2.translate(20, 50);
ctx2.rotate(-Math.PI / 2);
ctx2.fillText("Build time, seconds", -180, -5);
ctx2.restore();
ctx2.fillText("Number of files markdown (1 to 1000)", 200, 390);

for (let i = 0; i < 6; i++){
    ctx2.beginPath();
    ctx2.font = "12px Georgia";
    ctx2.lineWidth = 2.0; 
    ctx2.strokeStyle = SSGColors[i]
    ctx2.moveTo(510, i*20+100); 
    ctx2.lineTo(530, i*20+100);
    ctx2.fillText(SSG[i], 540, i*20+105); 
    ctx2.stroke();
}

for (let i = 0; i < TimeForTenThousandPages.length; i++){
    ssgTime = TimeForTenThousandPages[i];
    ctx2.strokeStyle = SSGColors[i];
    ctx2.fillStyle = SSGColors[i];
    for (let k = 0; k < ssgTime.length; k++){
        ctx2.beginPath();
        ctx2.lineWidth = 1.5;
        ctx2.ellipse(k*40+50, 350 - 5*ssgTime[k], 2, 2, Math.PI / 4, 0, 2 * Math.PI);
        ctx2.moveTo(k*40+50, 350 - 5*ssgTime[k]);
        ctx2.lineTo((k+1)*40+50, 350 - 5*ssgTime[k+1]);
        ctx2.fill();
        ctx2.stroke();
    }
}

//third plot

ctx3.strokeStyle = "white";
ctx3.lineWidth = 0.3; 
ctx3.beginPath();

ctx3.moveTo(50,0);
ctx3.lineTo(50,300);
ctx3.lineTo(620,300);
ctx3.stroke(); 

ctx3.fillStyle = "white";
ctx3.strokeStyle = "white";

for(let i = 0; i < 6; i++) { 
    ctx3.fillText(5*i, 30, 300-50*i); 
    ctx3.fillText(SSG[i], i*100+75, 320);
    if (i < 5){
        ctx3.lineWidth = 0.1; 
        ctx3.beginPath(); 
        ctx3.moveTo(50, i * 50 + 50); 
        ctx3.lineTo(620, i * 50 + 50); 
        ctx3.stroke();
    }
}
  
for(let i = 0; i < 6; i++) { 
    ctx3.beginPath();
    ctx3.fillStyle = SSGColors[i];
    ctx3.fillText(TimeBuildOn1000Pages[i], i*100+78, 290-10*TimeBuildOn1000Pages[i]);
    ctx3.fillRect(i*100+70,300,40, 0 - 10*TimeBuildOn1000Pages[i]);
}

ctx3.fillStyle = "white";
ctx3.save();
ctx3.translate(20, 50);
ctx3.rotate(-Math.PI / 2);
ctx3.fillText("Build time on 1000 files, seconds", -180, -5);
ctx3.restore();

    

