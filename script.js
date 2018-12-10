function O(obj)
{
    return document.getElementById(obj)
} 

function S(obj)
{
    return O(obj).style
}
function rand(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}
