// Standardized API response utilities

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Create a successful API response
 */
export function successResponse<T>(data: T, message?: string): ApiResponse<T> {
  return {
    success: true,
    data,
    message,
  };
}

/**
 * Create an error API response
 */
export function errorResponse(error: string | Error, statusCode?: number): ApiResponse {
  const errorMessage = error instanceof Error ? error.message : error;
  return {
    success: false,
    error: errorMessage,
  };
}

/**
 * Handle API errors with proper logging
 */
export function handleApiError(error: unknown) {
  console.error('[API Error]', error);

  if (error instanceof Error) {
    return errorResponse(error.message);
  }

  return errorResponse('An unexpected error occurred');
}

/**
 * Create standardized error response
 */
export function createErrorResponse(
  message: string,
  statusCode: number = 400
): { response: ApiResponse; status: number } {
  return {
    response: errorResponse(message),
    status: statusCode,
  };
}
