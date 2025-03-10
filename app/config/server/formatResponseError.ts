import { HttpError } from '@headless-adminapp/core/transport';
import { NextResponse } from 'next/server';

// This function formats the error response to be returned to the client
// Customize this function to format the error response as needed

export function formatResponseError(error: unknown) {
  if (error instanceof HttpError) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: error.status,
      }
    );
  } else {
    console.error(error);
    return NextResponse.json(
      {
        error: 'Internal Server Error',
      },
      {
        status: 500,
      }
    );
  }
}
