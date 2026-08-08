export const serializers = {
  error(error: Error) {
    return {
      name: error.name,

      message: error.message,

      stack: error.stack,
    };
  },

  request(request: any) {
    return {
      method: request.method,

      url: request.url,

      ip: request.ip,
    };
  },

  user(user: any) {
    return {
      id: user.id,

      email: maskEmail(user.email),
    };
  },
};

function maskEmail(email?: string) {
  if (!email) {
    return undefined;
  }

  const [name, domain] = email.split('@');

  return `${name[0]}***@${domain}`;
}
