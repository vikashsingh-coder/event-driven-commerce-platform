import { NodeSDK } from '@opentelemetry/sdk-node';

import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';

let sdk: NodeSDK | undefined;

export function initializeTracing(serviceName: string, endpoint: string): void {
  if (sdk) {
    return;
  }

  const exporter = new OTLPTraceExporter({
    url: endpoint,
  });

  sdk = new NodeSDK({
    serviceName,

    traceExporter: exporter,
  });

  sdk.start();
}

export async function shutdownTracing(): Promise<void> {
  if (!sdk) {
    return;
  }

  await sdk.shutdown();

  sdk = undefined;
}
