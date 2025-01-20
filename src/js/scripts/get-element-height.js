import * as TF from "./functions.js"

// Script to determine the height of the items
function watchElementHeights() {
	let existingHeightVars = []

	const getElemHeight = () => {
		const getHeightEls = document.querySelectorAll('[data-get-height]')
		let newHeightVars = []

		if (getHeightEls.length > 0) {
			const styles = []
			getHeightEls.forEach(getHeightEl => {
				const elID = getHeightEl.getAttribute('data-get-height')
				const elHeight = getHeightEl.offsetHeight

				styles.push(`--${elID}-height: ${elHeight}px;`)
				newHeightVars.push(`--${elID}-height`) // Додаємо нові змінні
				TF.logger(`Set variable: --${elID}-height: ${elHeight}px;`, 'success')
			})

			// Створюємо або оновлюємо <style> елемент з оновленими змінними
			createStylesToHead(styles, 'watcher_height')

			// Видаляємо змінні, які більше не використовуються
			removeUnusedVars(newHeightVars)
		} else {
			clearStyles('watcher_height')
			TF.logger('No elements with [data-get-height] found. No styles added.', 'info')
		}
		existingHeightVars = [...newHeightVars]
	}
	const removeUnusedVars = (newVars) => {
		const removedVars = existingHeightVars.filter(oldVar => !newVars.includes(oldVar))

		if (removedVars.length > 0) {
			const styleElement = document.querySelector('#watcher_height')
			if (styleElement) {
				let updatedStyles = styleElement.textContent

				removedVars.forEach(varName => {
					const regex = new RegExp(`${varName}:\\s?\\d+px;`, 'g')
					updatedStyles = updatedStyles.replace(regex, '')
				})

				styleElement.textContent = updatedStyles
			}
		}
	}

	const createStylesToHead = (stylesArray, id) => {
		let styleElement = document.querySelector(`#${id}`)
		if (!styleElement) {
			styleElement = document.createElement('style')
			styleElement.id = id
			document.head.appendChild(styleElement)
		}

		let stylesString = ':root {\n'
		stylesString += stylesArray.join('\n    ')
		stylesString += '\n}'

		styleElement.textContent = stylesString
	}

	const clearStyles = (id) => {
		const styleElement = document.querySelector(`#${id}`)
		if (styleElement) {
			styleElement.remove()
		}
	}
	const observer = new MutationObserver((mutations) => {
		mutations.forEach(mutation => {
			if (mutation.type === 'childList') {
				getElemHeight()
			}
		})
	})

	document.addEventListener('DOMContentLoaded', () => {
		getElemHeight()

		observer.observe(document.body, { childList: true, subtree: true })
	})

	window.addEventListener('resize', () => {
		getElemHeight()
	})
}
watchElementHeights()
