export class Service {
	send = async (channel, message) => {
		throw Error('Method not implemented in integration:', super.name);
	};

	dispatch = () => {
		throw Error('Method not implemented in integration:', super.name);
	};

	validate = () => {
		throw Error('Method not implemented in integration:', super.name);
	};

	Message = () => {
		throw Error('Method not implemented in integration:', super.name);
	};
}
