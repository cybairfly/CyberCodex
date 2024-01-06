// import {validate} from 'cyber-tools';
import got from 'got';

import {Service} from '../index.js';

export class Mock extends Service {
	send = async ({message, channel, options = {title: null, priority: null, tags: null}}) => {
		const {title, priority, tags} = options;
		const request = this.Message({
			message: this.normalize(message),
			channel,
			options,
		});

		this.dispatch(request);
	};

	dispatch = async request => {
		console.log(request);
	};

	validate = request => {

	};

	Message = ({message, channel, options}) => ({
		message,
		channel,
		options,
	});
}
