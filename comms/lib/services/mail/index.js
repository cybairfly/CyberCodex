// import {validate} from 'cyber-tools';
import {Actor} from 'apify';
import got from 'got';

import {Service} from '../index.js';

export class Mail extends Service {
	constructor({recipients = []}) {
		super();
		this.recipients = Array.isArray(recipients) ? recipients : [recipients];
	}

	send = async ({message, channel, options = {title: null, priority: null, tags: null}}) => {
		const {title, priority, tags} = options;
		const request = this.Message({
			message: this.normalize(message),
			channel,
			options,
		});

		// TODO
		// this.validate(messageRequest);
		this.dispatch(request);
	};

	dispatch = async request => {
		const options = {
			to: this.recipients.join(', '),
			subject: request.options.title || 'CyberComms Notification',
			text: request.message,
		};

		await Actor.call('apify/send-mail', options);
	};

	validate = request => {

	};

	Message = ({message, channel, options}) => ({
		message,
		channel,
		options,
	});
}
