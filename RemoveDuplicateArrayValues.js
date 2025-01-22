const deleteDuplicates =(head)=>{

    let sortValues = head.sort((a,b) => a-b);
    let removedValues = sortValues.filter((values , index) => sortValues.indexOf(values) === index);
    return removedValues
}

console.log(deleteDuplicates([1,2,3,4,4,1,2,6,5]));