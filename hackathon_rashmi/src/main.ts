import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './common/interceptor/response.interceptor';

/**
 * @author Rashmi Gupta
 * Bootstrap
 */
async function bootstrap() {

  /**
   * App Instance 
   */
  const app = await NestFactory.create(AppModule);

  /**
   * Globel Interceptor
  */
  app.useGlobalInterceptors(new ResponseInterceptor());

  /**
   * Globel Validation
   */
  app.useGlobalPipes(new ValidationPipe());

  /**
   * Sawgger Configuration 
   */
  const config = new DocumentBuilder()
    .setTitle('Patient Portal')
    .setDescription('Online Doctors Appointments Bookings')
    .setVersion('1.0')
    .addTag('Patient Portal')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  /**
   * port 
   */
  await app.listen(3000);
}

/**
 * bootstrap
 */
bootstrap();
