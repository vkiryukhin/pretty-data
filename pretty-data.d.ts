export namespace pd {
  export function xml(data: string): string;
  export function json(data: string): string;
  export function css(data: string): string;
  export function sql(data: string): string;
  export function xmlmin(data: string, preserveComments?: boolean): string;
  export function jsonmin(data: string): string;
  export function cssmin(data: string, preserveComments?: boolean): string;
  export function sqlmin(data: string): string;
}
