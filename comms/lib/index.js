import {Mail} from './services/mail/index.js';
import {Mock} from './services/mock/index.js';
import {Ntfy} from './services/ntfy/index.js';

const defaultServices = [
	Mock,
	Ntfy,
];

class Comms {
	#services;

	static services = {
		Mock,
		Mail,
		Ntfy,
	};

	constructor(services = defaultServices) {
		this.#services = services.map(ServiceOrInstance => typeof ServiceOrInstance === 'function' ? new ServiceOrInstance() : ServiceOrInstance);
	}

	get services() {
		return this.#services;
	}

	send = async ({service, message, channel, options}) => service.send({message, channel, options});

	cast = async ({message, channel, options}) =>
		this.services
			.map(service =>
				this.send({service, message, channel, options}));

	mock = new Mock();

	ntfy = new Ntfy();

	slack = {};
}

const comms = new Comms();

export {
	comms,
	Comms,
};

// const Robot = {
// 	comms: new Comms(),
// };

// const input = {
// 	message: 'hi',
// 	channel: 'test',
// };

// const {message, channel} = input;
// comms.cast({message, channel, options: {priority: 4}});

// await new Comms.services.Mail({recipients: ['icode@email.cz']}).send({message: 'test', channel: 'test'});
