import {validate} from 'cyber-tools';
import got from 'got';

import {Service} from '../index.js';

export class Ntfy extends Service {
	send = async ({message, channel, options = {title: null, priority: null, tags: null}}) => {
		const {title, priority, tags} = options;
		const messageRequest = this.Message({
			topic: channel,
			title,
			tags,
			body: message,
			priority,
		});

		this.validate(messageRequest);
		this.dispatch(messageRequest);
	};

	dispatch = async request => {
		const response = await got(request);
	};

	validate = request => {
		const model = {
			message: '',
			channelz: '',
		};

		validate(request, model);
	};

	Message = ({topic, title, priority, tags, body}) => ({
		method: 'POST',
		url: `http://ntfy.sh/${topic}`,
		headers: {
			title,
			tags,
			priority,
		},
		body,
	});
}
