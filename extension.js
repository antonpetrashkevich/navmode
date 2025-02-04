const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let navmodeEnabled = false;
	let commodeEnabled = false;

	console.log('Extension "navmode" is now active!');

	const navmodeOn = vscode.commands.registerCommand('navmode.on', function () {
		navmodeEnabled = true;
		commodeEnabled = false;
		vscode.commands.executeCommand('setContext', 'navmode', navmodeEnabled);
		vscode.commands.executeCommand('setContext', 'commode', navmodeEnabled);
		// vscode.window.showInformationMessage('Navmode enabled');
		console.log('Navmode enabled');
	});
	const commodeOn = vscode.commands.registerCommand('commode.on', function () {
		navmodeEnabled = false;
		commodeEnabled = true;
		vscode.commands.executeCommand('setContext', 'navmode', navmodeEnabled);
		vscode.commkands.executeCommand('setContext', 'commode', navmodeEnabled);
		// vscode.window.showInformationMessage('Commode enabled');
		console.log('Commode enabled');
	});
	const modeOff = vscode.commands.registerCommand('modes.off', function () {
		navmodeEnabled = false;
		commodeEnabled = false;
		vscode.commands.executeCommand('setContext', 'navmode', navmodeEnabled);
		vscode.commands.executeCommand('setContext', 'commode', navmodeEnabled);
		// vscode.window.showInformationMessage('Navmode and commode disabled');
		console.log('Navmode and commode disabled');
	});

	context.subscriptions.push(navmodeOn);
	context.subscriptions.push(commodeOn);
	context.subscriptions.push(modeOff);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
