/**
 * API Route Template
 * 
 * This is a template for creating secure API routes that use Supabase.
 * Copy and modify as needed for your endpoints.
 * 
 * Usage:
 * 1. Copy this file to src/app/api/[your-route]/route.ts
 * 2. Replace "TEMPLATE_OPERATION" with your operation name
 * 3. Update the request validation
 * 4. Update the database query
 */

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { successResponse, handleApiError, createErrorResponse } from '@/lib/api/response';
import type { ApiResponse } from '@/lib/api/response';

// Example: POST request handler
export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    // 1. Validate request body
    const body = await request.json();

    // Example validation (customize for your needs)
    if (!body.name || typeof body.name !== 'string') {
      const { response, status } = createErrorResponse('Invalid request: name is required');
      return NextResponse.json(response, { status });
    }

    // 2. Initialize Supabase client (server-side with full access)
    const supabase = await createClient();

    // 3. Perform database operation (example)
    // const { data, error } = await supabase
    //   .from('items')
    //   .insert([
    //     {
    //       name: body.name,
    //       description: body.description,
    //       price: body.price,
    //     }
    //   ])
    //   .select();

    // 4. Handle database errors
    // if (error) {
    //   const { response, status } = createErrorResponse(error.message, 500);
    //   return NextResponse.json(response, { status });
    // }

    // 5. Return success response
    // return NextResponse.json(successResponse(data, 'Item created successfully'));

    // Placeholder response for template
    return NextResponse.json(successResponse(null, 'Request processed'), { status: 201 });
  } catch (error) {
    const response = handleApiError(error);
    return NextResponse.json(response, { status: 500 });
  }
}

// Example: GET request handler
export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const supabase = await createClient();

    // Example query
    // const { data, error } = await supabase.from('items').select('*');

    // if (error) {
    //   const { response, status } = createErrorResponse(error.message, 500);
    //   return NextResponse.json(response, { status });
    // }

    // return NextResponse.json(successResponse(data));

    // Placeholder response for template
    return NextResponse.json(successResponse([], 'Data fetched successfully'));
  } catch (error) {
    const response = handleApiError(error);
    return NextResponse.json(response, { status: 500 });
  }
}

// Example: PUT request handler
export async function PUT(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();

    if (!body.id) {
      const { response, status } = createErrorResponse('Invalid request: id is required');
      return NextResponse.json(response, { status });
    }

    const supabase = await createClient();

    // Example update
    // const { data, error } = await supabase
    //   .from('items')
    //   .update(body)
    //   .eq('id', body.id)
    //   .select();

    // if (error) {
    //   const { response, status } = createErrorResponse(error.message, 500);
    //   return NextResponse.json(response, { status });
    // }

    // return NextResponse.json(successResponse(data, 'Item updated successfully'));

    // Placeholder response for template
    return NextResponse.json(successResponse(null, 'Item updated'));
  } catch (error) {
    const response = handleApiError(error);
    return NextResponse.json(response, { status: 500 });
  }
}

// Example: DELETE request handler
export async function DELETE(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      const { response, status } = createErrorResponse('Invalid request: id query parameter is required');
      return NextResponse.json(response, { status });
    }

    const supabase = await createClient();

    // Example delete
    // const { error } = await supabase.from('items').delete().eq('id', id);

    // if (error) {
    //   const { response, status } = createErrorResponse(error.message, 500);
    //   return NextResponse.json(response, { status });
    // }

    // return NextResponse.json(successResponse(null, 'Item deleted successfully'));

    // Placeholder response for template
    return NextResponse.json(successResponse(null, 'Item deleted'));
  } catch (error) {
    const response = handleApiError(error);
    return NextResponse.json(response, { status: 500 });
  }
}

/**
 * Important Security Notes:
 * 
 * 1. This code runs server-side only, so you can safely use all environment variables
 * 2. Always validate user input before using it in database queries
 * 3. Use parameterized queries (Supabase does this by default)
 * 4. Implement authentication checks if needed
 * 5. Log errors for debugging but don't expose internal details to clients
 * 6. Consider adding rate limiting for public endpoints
 * 7. For e-commerce, add transaction validation and payment verification
 */
