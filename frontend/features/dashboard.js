// REBEL_VIEW_CONFIG: {"type":"component","component":"telemetry-dashboard","title":"Request Operations","endpoints":["/api/dashboard","/api/telemetry","/api/requests"],"widgets":["KPI","workflow status","recent requests","telemetry"]}
import {createTelemetryDashboardView} from '/rebel/telemetry-dashboard.js';
// Only business API contract belongs to Genesis; all widget rendering belongs to REBEL.
export default createTelemetryDashboardView({
 title:'Request Operations',
 description:'CRUD · Workflow · Dashboard · Dynamic Views — live PROTO API metrics',
 fetchData:api=>Promise.all([api.request('/api/dashboard'),api.request('/api/telemetry'),api.request('/api/requests')])
});
