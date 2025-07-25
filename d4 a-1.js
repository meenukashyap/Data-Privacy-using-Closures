function outerfunction()
{
    let message="hello"
    
        function innerfunction()
            {
                console.log(message)
            }
        return innerfunction
    
}
const myclosure=outerfunction()
myclosure()