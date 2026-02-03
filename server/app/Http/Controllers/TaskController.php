<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\tasks;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function createTask(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'nullable|string|in:pending,in_progress,completed',
            'id' => 'nullable|integer|exists:tasks,id', // optional for update
        ]);

        $validated['user_id'] = auth()->id() ?? 1;

        // Only keep relevant fields
        $data = collect($validated)->only(['id', 'title', 'description', 'status', 'user_id'])->toArray();

        // Create or update
        $task = tasks::updateOrCreate(
            ['id' => $data['id'] ?? null],
            $data
        );

        return response()->json([
            'message' => 'Task created successfully',
            'task' => $task
        ], 201);
    }

    public function getTasks()
    {
        $tasks = tasks::all();
        return response()->json($tasks, 200);
    }

    public function updateTask(Request $request, $id)
    {
        $task = tasks::find($id);
        if (!$task) {
            return response()->json(['message' => 'Task not found'], 404);
        }

        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|nullable|string',
            'status' => 'sometimes|nullable|string|in:pending,in_progress,completed',
        ]);

        $task->update($validated);

        return response()->json($task, 200);
    }

    public function deleteTask($id)
    {
        $task = tasks::find($id);
        if (!$task) {
            return response()->json(['message' => 'Task not found'], 404);
        }

        $task->delete();

        return response()->json(['message' => 'Task deleted successfully'], 200);
    }
}
