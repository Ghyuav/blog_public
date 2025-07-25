
var home;
home = window.location.hostname;
var trustlist = ['g-haoyu.top','ghyuav.netlify.app','localhost','www.g-haoyu.top','blog.g-haoyu.top']
if (trustlist.includes(home) != 1){
    window.location = "https://g-haoyu.top"+window.location.pathname;
}