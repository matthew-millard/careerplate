import {
	data,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'react-router'
import { type Route } from './+types/root.ts'
import { GeneralErrorBoundary } from './components/error-boundary.tsx'
import { Logo } from './components/ui'
import tailwindStyleSheetUrl from './styles/tailwind.css?url'

export const links: Route.LinksFunction = () => {
	return [{ rel: 'stylesheet', href: tailwindStyleSheetUrl }].filter(Boolean)
}

export const meta: Route.MetaFunction = ({ data }) => {
	return [
		{ title: data ? 'Career Plate' : 'Error | Career Plate' },
		{
			name: 'description',
			content:
				'Career Plate is a free networking platform for hospitality workers. Connect with industry peers, showcase your experience, and discover new opportunities in the hospitality sector.',
		},
	]
}

export async function loader({}: Route.LoaderArgs) {
	return data({})
}

function Document({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`h-full overflow-x-hidden`}>
			<head>
				<Meta />
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Links />
			</head>
			<body className="bg-background text-foreground">
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export function Layout({ children }: { children: React.ReactNode }) {
	return <Document>{children}</Document>
}

function App() {
	return (
		<>
			<div className="min-h-screen flex flex-col justify-between">
				<header className="py-6 container">
					<nav>
						<Logo />
					</nav>
				</header>
				<div className="flex-1">
					<Outlet />
				</div>
			</div>
		</>
	)
}

export default App

// this is a last resort error boundary. There's not much useful information we
// can offer at this level.
export const ErrorBoundary = GeneralErrorBoundary
