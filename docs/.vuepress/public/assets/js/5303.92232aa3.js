"use strict";(self.webpackChunkreisen=self.webpackChunkreisen||[]).push([[5303],{5303:(e,t,n)=>{function i(){document.getElementById("home-wave-canvas1").width=window.innerWidth,document.getElementById("home-wave-canvas2").width=window.innerWidth,function(){let e=0,t=-1e3,n=document.getElementById("home-wave-canvas1"),i=n.getContext("2d");!function o(){e-=5,-1*e==550&&(e=0),i.clearRect(0,0,n.width,n.height),i.fillStyle="rgba(255,255,255,.524)",i.beginPath(),i.moveTo(t-e,45);for(let n=0;n<6;n++){let o=550*n+t-e;i.quadraticCurveTo(o+137.5,60,o+275,45),i.quadraticCurveTo(o+137.5+275,30,o+550,45)}i.lineTo(2300,3e3),i.lineTo(t,3e3),i.fill(),setTimeout(o,25)}()}(),function(){let e=0,t=-1e3,n=412.5,i=n/2,o=document.getElementById("home-wave-canvas2"),a=o.getContext("2d");!function l(){e-=5,-1*e==825&&(e=0),a.clearRect(0,0,o.width,o.height),a.fillStyle="rgba(255,255,255,.745)",a.beginPath();a.moveTo(t-e,105);for(let o=0;o<4;o++){let l=825*o+t-e;a.quadraticCurveTo(l+i,135,l+n,105),a.quadraticCurveTo(l+i+n,75,l+825,105)}a.lineTo(2300,3e3),a.lineTo(t,3e3),a.fill(),setTimeout(l,5e3/60)}()}()}n.r(t),n.d(t,{wave:()=>i})}}]);