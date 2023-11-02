const Assigment1 = () => {
    return (
        <>
            <ReactImage></ReactImage>
            <br />
            <ReactButton></ReactButton>
            <ReactForm></ReactForm>
        </>
    )
}

const ReactButton = () => {
    return (
        <>
            <button
                onDoubleClick={() => { alert("Alert That") }}
                onClick={() => { console.log('single Click') }}
            >Button
            </button>
        </>
    )
}
const ReactForm = () => {
    return (
        <>
            <form onBlur={() => { console.log("OnBlur") }} onFocus={() => { console.log("onFocud") }}>
                <input
                    onCopy={() => console.log("somethig is copied")}
                    onCut={() => console.log("somethig is Cut")}
                    onPaste={() => console.log("somethig is Paste")}
                    type="text" />
            </form>
        </>
    )
}
const ReactImage = (e) => {
    const image = document.querySelector('#image');
    const sizeIncrease = () => {
        console.log(image.width);
        image.style.width = "400px";
        image.style.height = "400px"
    }
    const origenalSize = () => {
        image.style.width = "200px";
        image.style.height = "200px"
    }
    return (
        <>
            <img
                id="image"
                onMouseLeave={origenalSize}
                onMouseOver={sizeIncrease}
                height="200px"
                width="200px"
                src="https://media.istockphoto.com/id/1397678880/photo/closeup-of-a-black-businesswoman-typing-on-a-laptop-keyboard-in-an-office-alone.jpg?s=1024x1024&w=is&k=20&c=NXv9aukTsuWSAQV9vvbEo0w_v5dq8z_COaUzq4UG4Sw=" alt=""
            />
        </>
    )
}
export default Assigment1;