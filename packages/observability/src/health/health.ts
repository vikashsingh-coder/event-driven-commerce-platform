export interface HealthCheckResult {
  status: 'healthy' | 'unhealthy';

  details?: Record<string, unknown>;
}

export interface HealthCheck {
  name: string;

  check(): Promise<HealthCheckResult>;
}

export async function runHealthChecks(checks: HealthCheck[]) {
  const results: Record<string, HealthCheckResult> = {};

  let healthy = true;

  for (const healthCheck of checks) {
    try {
      const result = await healthCheck.check();

      results[healthCheck.name] = result;

      if (result.status !== 'healthy') {
        healthy = false;
      }
    } catch (error) {
      healthy = false;

      results[healthCheck.name] = {
        status: 'unhealthy',

        details: {
          error: error instanceof Error ? error.message : 'Unknown error',
        },
      };
    }
  }

  return {
    status: healthy ? 'healthy' : 'unhealthy',

    checks: results,
  };
}

// Example usage of runHealthChecks function response format:

// {
//   "status": "unhealthy",
//   "checks": {
//     "database": {
//       "status": "healthy",
//       "details": {
//         "latency_ms": 12,
//         "connected": true
//       }
//     },
//     "redis": {
//       "status": "unhealthy",
//       "details": {
//         "error": "Connection timeout"
//       }
//     },
//     "diskSpace": {
//       "status": "healthy",
//       "details": {
//         "free_gb": 120,
//         "threshold_gb": 50
//       }
//     },
//     "externalApi": {
//       "status": "unhealthy",
//       "details": {
//         "error": "503 Service Unavailable"
//       }
//     }
//   }
// }
