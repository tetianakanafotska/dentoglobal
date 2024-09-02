function CustomButton(props: { name: string; styling: string }) {
    return (
        <button
            className={`rounded-full px-11 py-3 text-lg font-medium ${props.styling}`}
        >
            {props.name}
        </button>
    )
}

export default CustomButton
