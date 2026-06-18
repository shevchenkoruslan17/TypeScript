
type Primitive = string | number | boolean;

function foobar(arrayOfPrimitives:Primitive[]):void  {
    document.write(`<ul>`);
    for ( const item of arrayOfPrimitives ) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

foobar([1234,43434,343435,656,`asdalsfkj`,true]);
