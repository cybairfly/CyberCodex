export class Service {
	send = async (channel, message) => {
		throw Error('Method not implemented in integration:', super.name);
	};

	normalize = message => typeof message === 'string' ?
		message :
		message?.toString?.() || JSON.stringify(message);

	dispatch = message => {
		throw Error('Method not implemented in integration:', super.name);
	};

	validate = request => {
		throw Error('Method not implemented in integration:', super.name);
	};

	Message = () => {
		throw Error('Method not implemented in integration:', super.name);
	};
}
