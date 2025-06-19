function testscope()
{
    if(true)
    {
        var oldVar="I am a Var"; // function scope
        let newLet="I am a new Let"; //blocked scope
        const constant1 = "I am a const"; //blocked scope

    }
    console.log(oldVar);
    console.log(newLet);
    console.log(constant1);
}

testscope()