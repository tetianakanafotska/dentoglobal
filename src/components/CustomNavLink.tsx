import { NavLink } from 'react-router-dom'

function CustomNavLink(props: { route: string; name: string }) {
    return (
        <NavLink
            to={props.route}
            className={({ isActive }) =>
                isActive
                    ? "before:bg-yellow text-lg font-light text-white before:mr-4 before:inline-block before:h-2.5 before:w-2.5 before:rounded-full before:content-['']"
                    : 'text-lg font-light text-white'
            }
        >
            {props.name}
        </NavLink>
    )
}

export default CustomNavLink
