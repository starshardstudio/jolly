export default function(data: Lume.Data, helpers: Lume.Helpers) {
	const charset = (
		<meta charSet={"utf8"}/>
	)

	const viewport = (
		<meta
			name={"viewport"}
			content={"width=device-width, initial-scale=1"}
		/>
	)

	const title = (
		<title children={data.title}/>
	)

	const stylesheets = data.styles.map((style: string) => (
		<link
			key={style}
			rel={"stylesheet"}
			href={style}
		/>
	))

	const children = data.children

	// noinspection HtmlRequiredTitleElement
	return (
		<html>
			<head>
				{charset}
				{viewport}
				{title}
				{stylesheets}
			</head>
			<body>
				<div>
					<main>	
						{children}
					</main>
					<footer>
						Realizzato da <a href="https://www.steffo.eu/">Steffo</a> per <a href="https://github.com/starshardstudio">Star Shard Studio</a>
					</footer>
				</div>
			</body>
		</html>
	)
}