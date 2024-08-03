import { default as lumeCMS } from "lume/cms/mod.ts";
import {formatDateIso} from "./_utils/date.ts"

const cms = lumeCMS();


cms.document(
	"globals",
	"src:_data.yml",
	[
		{
			name: "title",
			type: "text",
			label: "Titolo", 
			description: "Il titolo del sito.",
		},
	]
)

cms.document(
	"index",
	"src:index.md",
	[
		{
			name: "content",
			type: "markdown",
			label: "Testo",
			description: "Il testo da visualizzare sulla pagina iniziale.",
		}
	]
)

export default cms;