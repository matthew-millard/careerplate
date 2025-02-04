import { Link } from 'react-router'

const Logo = () => {
	return (
		<Link to="/" className="group grid leading-none">
			<span className="font-light transition-all duration-300 ease-in-out group-hover:-skew-x-12 group-hover:text-primary">
				Career
			</span>
			<span className="font-semibold transition-all duration-300 ease-in-out group-hover:-skew-x-12 group-hover:text-primary">
				Plate
			</span>
		</Link>
	)
}

Logo.displayName = 'Logo'

export { Logo }
