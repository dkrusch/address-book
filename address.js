// Some starter code
const container = document.querySelector("#addressList")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const personName = document.querySelector("#fullName").value
    const personAddress = document.querySelector("#address").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
            <h1>${personName}</h1>
            <div>${personAddress}</div>
        </section>
    `
})

document.querySelector("#saveWish").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const thing = document.querySelector("#thing").value
    const location = document.querySelector("#place").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    if (thing !== "" && location !== "")
    {
        container.innerHTML += `
        <section>
            <h1>I can purchase ${thing} at ${location}</h1>
        </section>
    `
    }
    else
    {
        alert("you needs be entering information before we can list it!!!!!!")
    }
    
    console.log(thing)
    document.querySelector("#thing").value = ""
    document.querySelector("#place").value = ""
    document.querySelector("#thing").focus()
    console.log(document.querySelector("#thing").value)
})