using Microsoft.EntityFrameworkCore;
using TravelPlanner00017431.DAL.Data;
using TravelPlanner00017431.DAL.Data.Repositories;
using TravelPlanner00017431.DAL.Models;

var allowedOrigins = "_allowedOrigins";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AppDbContext>(options => 
    options.UseSqlServer(builder.Configuration.GetConnectionString("TravelPlanner00017431")));

builder.Services.AddScoped<IRepository<Trip>, TripsRepository>();
builder.Services.AddScoped<IRepository<Activity>, ActivitiesRepository>();

builder.Services.AddCors(options =>
{
    options.AddPolicy(allowedOrigins, policy =>
    {
        policy.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();
app.UseCors(allowedOrigins);

app.MapControllers();

app.Run();
