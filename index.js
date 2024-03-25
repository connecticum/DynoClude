
let elements = []
const SERVER_ADDRESS = "localhost"

function get_children(parent) {
	for (let i = 0; i < parent.childNodes.length; ++i) {
		try {

			if (parent.childNodes[i].attributes.getNamedItem('dynclude') != null) {
				elements[elements.length] = parent.childNodes[i]
			} else {
				get_children(parent.childNodes[i])
			}
		} catch {

		}
	}
}



function dynclude(element) {
	const path = element.attributes.getNamedItem('dynclude').value
	axios.get("http" + path).then(() => {
		// add inner code
		// delete element from list
		
	}).catch(()=>{})
}

get_children(document)
for ( let i = 0; i < elements.length; ++i) {
	dynclude(elements[i])
}