var inputs = process.argv.slice(2);
    var result = inputs.map(x => x[0])
                       .reduce((a,b)=> { return a.concat(b).toUpperCase() });
    console.log(result);
