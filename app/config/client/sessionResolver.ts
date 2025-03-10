import { SessionResolver } from '@headless-adminapp/app/auth';

export const sessionResolver: SessionResolver = async () => {
  const response = await fetch('/api/me');

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  return {
    id: data.id,
    email: data.email,
    exp: data.exp,
    fullName: data.fullName,
    data: data,
    profilePicture: data.profilePicture,
  };
};
