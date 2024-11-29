import React, { useRef, useState } from "react";

export default function SelectInput({ label, options, initialValue }) {
    const dummy = useRef();
    const selectWrapper = useRef();
    const dropdownBtn = useRef();

    const [selected, setSelected] = useState(initialValue);

    const handleChange = ({ target }) => {
        const val = target.options[target.selectedIndex].innerText
        setSelected(val);
        // resizeSelect(target);
    }

    const resizeSelect = (select) => {
        const dummyEl = dummy.current;
        const selectStyle = window.getComputedStyle(select);

        // The element's font style impacts the text width
        dummyEl.style.font = selectStyle.font;
        dummyEl.innerText = select.options[select.selectedIndex].innerText;

        selectWrapper.current.style.width = `${dummyEl.clientWidth + 24}px`;
        // dropdownBtn.current.style.marginLeft = `${
        //     dummyEl.clientWidth + 18 * 2
        // }px`;
    };

    return (
        <div>
            <label className="font-header">{label}</label>

            <div ref={selectWrapper} className="inline-block relative isolate w-full">
                <select
                    className="absolute top-0 left-0 w-full h-full opacity-0 z-10 peer"
                    onChange={handleChange}
                >
                    {options.map((op, i) => (
                        <option value={op.value}>{op.label}</option>
                    ))}
                </select>

                <div className="flex items-center justify-between py-2 px-5 bg-white hover:bg-gray-200 text-gray-600 hover:text-gray-950 peer-focus:outline peer-focus:outline-1 peer-focus:outline-primary-500">
                    <span>{selected}</span>
                    <button ref={dropdownBtn} tabIndex={-1}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M12 5v14" />
                            <path d="m19 12-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>
            <span ref={dummy} className="py-2 px-5 absolute invisible"></span>
        </div>
    );
}
