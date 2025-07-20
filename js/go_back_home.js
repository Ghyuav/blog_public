
var home;
home = window.location.hostname;
const host_name = home.split('.')
var trustlist = ['g-haoyu.top','ghyuav.netlify.app','localhost','www.g-haoyu.top','blog.g-haoyu.top']
if (trustlist.includes(host_name[0]) != 1){
    window.location = "https://g-haoyu.top"+window.location.pathname;
}