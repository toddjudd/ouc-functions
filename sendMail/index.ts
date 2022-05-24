import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import axios from 'axios';
import { getToken, tokenRequest } from '../lib/auth';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const authResponse = await getToken(tokenRequest);
  const options = {
    headers: {
      Authorization: `Bearer ${authResponse.accessToken}`,
    },
  };
  const body = {
    message: {
      subject: `🚩 New Contact Us Request From: ${req.body?.fullName} 👏`,
      body: {
        contentType: 'Text',
        content: `New message from: ${req.body?.fullName}\n\nEmail: ${req.body?.email}\n\nPhoneNumber ${req.body?.phoneNumber}\n\n${req.body?.message}`,
      },
      toRecipients: [
        {
          emailAddress: {
            address: process.env.CONTACT_US_TO_EMAIL,
          },
        },
      ],
    },
    saveToSentItems: 'false',
  };
  const endpoint =
    process.env.GRAPH_ENDPOINT +
    `v1.0/users/${process.env.CONTACT_US_FROM_ID}/sendMail`;
  try {
    const response = await axios.post(endpoint, body, options);
    context.res = {
      status: response.status,
      body: response.data,
    };
  } catch (error) {
    context.log(error);
    context.res = {
      status: error.status || 500,
      body: error.body || 'Something went wrong',
    };
  }
};

export default httpTrigger;
