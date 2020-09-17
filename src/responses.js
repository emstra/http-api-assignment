const respond = (request, response, status, content, type) => {
  response.writeHead(status, { 'Content-Type': type });
  response.write(content);
  response.end();
};

const getSuccess = (request, response, acceptedTypes) => {
  // console.log('here');
  const responseJson = {
    title: 'success',
    message: 'successful response',
  };

  if (acceptedTypes[0] === 'text/xml') {
    const responseXML = `
          <response>
            <title>${responseJson.title}</title>
            <message>${responseJson.message}</message>
          </response>
        `;
    return respond(request, response, 200, responseXML, 'text/xml'); // bail out
  }

  const responseStr = JSON.stringify(responseJson);
  return respond(request, response, 200, responseStr, 'application/json'); // default
};

const getBad = (request, response, acceptedTypes, params) => {
  // console.log('here');
  const responseJson = {
    title: 'Bad Request',
    message: 'missing valid query parameter set to true',
  };

  let code = 400;
  // test for query parameter
  if (params.valid === 'true') {
    code = 200;
    responseJson.message = 'found needed parameter';
  }

  if (acceptedTypes[0] === 'text/xml') {
    const responseXML = `
          <response>
            <title>${responseJson.title}</title>
            <message>${responseJson.message}</message>
          </response>
        `;
    return respond(request, response, code, responseXML, 'text/xml'); // bail out
  }

  const responseStr = JSON.stringify(responseJson);
  return respond(request, response, code, responseStr, 'application/json'); // default
};

const getUnauthorized = (request, response, acceptedTypes, params) => {
  // console.log('here');
  const responseJson = {
    title: 'Unauthorized Request',
    message: 'Missing logged in query parameter',
  };

  let code = 401;
  // test for query parameter
  if (params.loggedIn === 'yes') {
    code = 200;
    responseJson.message = 'You are logged in';
  }

  if (acceptedTypes[0] === 'text/xml') {
    const responseXML = `
          <response>
            <title>${responseJson.title}</title>
            <message>${responseJson.message}</message>
          </response>
        `;
    return respond(request, response, code, responseXML, 'text/xml'); // bail out
  }

  const responseStr = JSON.stringify(responseJson);
  return respond(request, response, code, responseStr, 'application/json'); // default
};

const getForbidden = (request, response, acceptedTypes) => {
  const responseJson = {
    title: 'Forbidden',
    message: 'You do not have access to this content.',
  };

  const code = 403;

  if (acceptedTypes[0] === 'text/xml') {
    const responseXML = `
          <response>
            <title>${responseJson.title}</title>
            <message>${responseJson.message}</message>
          </response>
        `;
    return respond(request, response, code, responseXML, 'text/xml'); // bail out
  }

  const responseStr = JSON.stringify(responseJson);
  return respond(request, response, code, responseStr, 'application/json'); // default
};

const getInternal = (request, response, acceptedTypes) => {
  const responseJson = {
    title: 'Internal Server Error',
    message: 'Internal server error. Something went wrong.',
  };

  const code = 500;

  if (acceptedTypes[0] === 'text/xml') {
    const responseXML = `
          <response>
            <title>${responseJson.title}</title>
            <message>${responseJson.message}</message>
          </response>
        `;
    return respond(request, response, code, responseXML, 'text/xml'); // bail out
  }

  const responseStr = JSON.stringify(responseJson);
  return respond(request, response, code, responseStr, 'application/json'); // default
};

const getNotImplemented = (request, response, acceptedTypes) => {
  const responseJson = {
    title: 'Not Implemented',
    message: 'A get request for this page has not been implemented. Check again later',
  };

  const code = 501;

  if (acceptedTypes[0] === 'text/xml') {
    const responseXML = `
          <response>
            <title>${responseJson.title}</title>
            <message>${responseJson.message}</message>
          </response>
        `;
    return respond(request, response, code, responseXML, 'text/xml'); // bail out
  }

  const responseStr = JSON.stringify(responseJson);
  return respond(request, response, code, responseStr, 'application/json'); // default
};

const getNotFound = (request, response, acceptedTypes) => {
  const responseJson = {
    title: 'Not Found',
    message: 'Page not found.',
  };

  const code = 404;

  if (acceptedTypes[0] === 'text/xml') {
    const responseXML = `
          <response>
            <title>${responseJson.title}</title>
            <message>${responseJson.message}</message>
          </response>
        `;
    return respond(request, response, code, responseXML, 'text/xml'); // bail out
  }

  const responseStr = JSON.stringify(responseJson);
  return respond(request, response, code, responseStr, 'application/json'); // default
};

module.exports = {
  getSuccess,
  getBad,
  getUnauthorized,
  getForbidden,
  getInternal,
  getNotImplemented,
  getNotFound,
};
