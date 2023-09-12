String.prototype.capitalize = function()
{
    return this.charAt(0).toUpperCase() + this.slice(1);
}

Object.prototype.keys = function()
{
    return Object.keys(this);
}