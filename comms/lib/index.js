import got from 'got';

import {Ntfy} from './services/ntfy/index.js';

const input = {
	message: 'hi',
	channel: 'wolt-demand',
};

class Comms {
	constructor() {
		this.x = 123;
	}

	ntfy = new Ntfy();

	slack = {};
}

const Robot = {
	comms: new Comms(),
};

const {message, channel} = input;
Robot.comms.ntfy.send({message, channel, options: {priority: 4}});
