/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let descstring=[];
    let sortedheights = heights.toSorted((a,b)=>b-a);
    for(i=0;i<sortedheights.length;i++){       
    let hei=heights.indexOf(sortedheights[i])
            descstring.push(names[hei]);          
    }
    return descstring
};