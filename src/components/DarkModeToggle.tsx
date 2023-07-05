import { useLayoutEffect, useState } from "react"
import "./DarkModeToggle.css"

const DarkModeToggle: React.FC = () => {

    const [ isDarkMode, setIsDarkMode ] = useState<boolean>(false)

    useLayoutEffect(() => {
        const isDarkModeLS = localStorage.getItem("isDarkMode");
        setIsDarkMode(isDarkModeLS === "true")
    }, [])

    const onToggleDarkMode = () => {
        setIsDarkMode(prev => {
            localStorage.setItem("isDarkMode", String(!prev));
            return !prev
        }) 
    }

    return <div className="toggle">
        <svg width="0" height="0">
            <defs>
                <clipPath id="moon">
                    <path d="m27.5,25c-6.904,0-12.5-5.596-12.5-12.5,0-5.76,3.897-10.606,9.196-12.055C22.843.155,21.44,0,20,0,8.954,0,0,8.954,0,20s8.954,20,20,20,20-8.954,20-20c0-1.44-.155-2.843-.445-4.196-1.449,5.3-6.296,9.196-12.055,9.196Z" />
                </clipPath>
            </defs>
        </svg>
        <label className="switch">
            <span className="switch__icon switch__icon--light">
                <span className="switch__icon-part switch__icon-part--1"></span>
                <span className="switch__icon-part switch__icon-part--2"></span>
                <span className="switch__icon-part switch__icon-part--3"></span>
                <span className="switch__icon-part switch__icon-part--4"></span>
                <span className="switch__icon-part switch__icon-part--5"></span>
                <span className="switch__icon-part switch__icon-part--6"></span>
                <span className="switch__icon-part switch__icon-part--7"></span>
                <span className="switch__icon-part switch__icon-part--8"></span>
                <span className="switch__icon-part switch__icon-part--9"></span>
            </span>
            <input className="switch__input" type="checkbox" role="switch" onChange={onToggleDarkMode} checked={isDarkMode} />
            <span className="switch__icon switch__icon--dark">
                <span className="switch__icon-part switch__icon-part--1">
                    <span className="switch__icon-part switch__icon-part--1a"></span>
                    <span className="switch__icon-part switch__icon-part--1b"></span>
                </span>
            </span>
            <span className="switch__label">Dark Mode</span>
        </label>
    </div>
}

export default DarkModeToggle;


