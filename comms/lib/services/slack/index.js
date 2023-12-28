import got from 'got';

import {Service} from '..';

export class Slack extends Service {
	dispatch = () => {};

	Message = ({ topic, title, priority, tags, body }) => ({
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

// const message = Message(input);

// const response = await got(message);
